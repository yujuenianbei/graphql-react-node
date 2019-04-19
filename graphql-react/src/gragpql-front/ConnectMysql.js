import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {

    }
    postMutationAdd = () => {
        // console.log(this.refs.addInputAuthor.value);
        // console.log(this.refs.addInputContent.value);
        var name = this.refs.addInputName.value;
        var sex = this.refs.addInputSex.value;
        var intro = this.refs.addInputIntro.value;
        var query = `mutation addUser($name: String!,$sex: String! ,$intro: String!) {
            addUser(name: $name, sex: $sex, intro: $intro) {
                id
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
                    name,
                    sex,
                    intro
                }
            })
        })
            .then(r => r.json())
            .then(data => console.log('json:', data));
    }
    postQuery = () => {
        console.log(this.refs.findInputId.value);
        var id = parseInt(this.refs.findInputId.value);
        var query = `query user($id: Int) {
            user(id: $id) {
                id,
                name,
                sex,
                intro
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
                    <h4>添加</h4>
                    <input ref='addInputName' placeholder='add name' />
                    <input ref='addInputSex' placeholder='add sex' />
                    <input ref='addInputIntro' placeholder='add intro' />
                    <button onClick={this.postMutationAdd}>add</button>
                    <h4>查询</h4>
                    <input ref='findInputId' placeholder='query id' />
                    <button onClick={this.postQuery}>query</button>
                    <h4>修改</h4>
                    <input ref='editInputId' placeholder='eidt ID' />
                    <input ref='editInputAuthor' placeholder='eidt author' />
                    <input ref='editInputContent' placeholder='eidt content' />
                    <button onClick={this.postMutationEdit}>edit</button>
            </div>
        );
    }
}

export default App;
