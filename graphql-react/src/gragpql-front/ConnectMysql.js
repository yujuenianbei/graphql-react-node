import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {

    }
    postMutationAdd = () => {
        var name = this.refs.addInputName.value;
        var sex = this.refs.addInputSex.value;
        var intro = this.refs.addInputIntro.value;
        var query = `mutation addUser($name: String!,$sex: String! ,$intro: String!) {
            addUser(name: $name, sex: $sex, intro: $intro) {
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
        var id = parseInt(this.refs.editInputId.value);
        var name = this.refs.editInputName.value;
        var sex = this.refs.editInputSex.value;
        var intro = this.refs.editInputIntro.value;
        var query = `mutation addUserByInput($id: Int!, $name: String!,$sex: String! ,$intro: String!) {
            addUserByInput(id: $id, name: $name, sex: $sex, intro: $intro) {
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
                    id,
                    name,
                    sex,
                    intro
                }

                // variables: {
                //     id,
                //     input: {
                //         author,
                //         content,
                //     }
                // }
            })
        })
            .then(r => r.json())
            .then(data => console.log('json:', data));
    }

    postMutationDelete = () => {
        var id = parseInt(this.refs.deleteInputId.value);
        var query = `mutation deleteUser($id: Int!) {
            deleteUser(id: $id) {
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
                    id,
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
                    <input ref='editInputName' placeholder='eidt name' />
                    <input ref='editInputSex' placeholder='eidt sex' />
                    <input ref='editInputIntro' placeholder='eidt intro' />
                    <button onClick={this.postMutationEdit}>edit</button>
                    <h4>删除</h4>
                    <input ref='deleteInputId' placeholder='delete id' />
                    <button onClick={this.postMutationDelete}>delete</button>
            </div>
        );
    }
}

export default App;
