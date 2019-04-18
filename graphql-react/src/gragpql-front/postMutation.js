import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {
        // // graphql接口
        // // text
        // fetch('/graphql', {
        //   method: "post",
        //   mode: "cors",
        //   headers: {
        //     'Content-Type': 'application/graphql',
        //     'Accept': 'application/json,text/plain,*/*'
        //   },
        //   body: "{getDie(numSides: 6){rollOnce,roll(numRolls: 3)}}"
        // }).then(response => response.json())
        //   .then(result => {
        //     // 在此处写获取数据之后的处理逻辑
        //     console.log('text:',result);
        //   }).catch(function (e) {
        //     console.log("fetch fail");
        //   });

        // // json
        //   var sides = 3;
        //   var rolls = 10;
        //   var query = `query getDie($sides: Int!, $rolls: Int!) {
        //     getDie(numSides: $sides) {
        //       rollOnce
        //       roll(numRolls: $rolls)
        //     }
        //   }`;
        //   fetch('/graphql', {
        //     method: 'POST',
        //     mode: "cors",
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       query,
        //       variables: { sides, rolls },
        //     })
        //   })
        // .then(r => r.json())
        // .then(data => console.log('json:', data));
    }
    postMutationAdd = () => {
        console.log(this.refs.addInputAuthor.value);
        console.log(this.refs.addInputContent.value);
        var author = this.refs.addInputAuthor.value;
        var content = this.refs.addInputContent.value;
        var query = `mutation CreateMessage($input: MessageInput) {
            createMessage(input: $input) {
                id,
                author,
                content
            }
        }`;
        fetch('/graphql', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: {
                    input: {
                        author,
                        content,
                    }
                }
            })
        })
            .then(r => r.json())
            .then(data => console.log('json:', data));
    }
    postQuery = () => {
        console.log(this.refs.findInputId.value);
        var id = this.refs.findInputId.value;
        var query = `query GetMessage($id: ID!) {
            getMessage(id: $id) {
                id,
                author,
                content
            }
        }`;
        fetch('/graphql', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: {
                    id
                }
            })
        })
            .then(r => r.json())
            .then(data => console.log('json:', data));
    }
    postMutationEdit = () => {
        console.log(this.refs.editInputId.value);
        console.log(this.refs.editInputAuthor.value);
        console.log(this.refs.editInputContent.value);
        var id = this.refs.editInputId.value;
        var author = this.refs.editInputAuthor.value;
        var content = this.refs.editInputContent.value;
        var query = `mutation UpdateMessage($id: ID!, $input: MessageInput) {
            updateMessage(id: $id, input: $input) {
                id,
                author,
                content
            }
        }`;
        fetch('/graphql', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: {
                    id,
                    input: {
                        author,
                        content,
                    }
                }
            })
        })
            .then(r => r.json())
            .then(data => console.log('json:', data));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h4>添加</h4>
                    <input ref='addInputAuthor' placeholder='add author' />
                    <input ref='addInputContent' placeholder='add content' />
                    <button onClick={this.postMutationAdd}>add</button>
                    <h4>查询</h4>
                    <input ref='findInputId' placeholder='query author' />
                    <button onClick={this.postQuery}>query</button>
                    <h4>修改</h4>
                    <input ref='editInputId' placeholder='eidt ID' />
                    <input ref='editInputAuthor' placeholder='eidt author' />
                    <input ref='editInputContent' placeholder='eidt content' />
                    <button onClick={this.postMutationEdit}>edit</button>
                </header>
            </div>
        );
    }
}

export default App;
