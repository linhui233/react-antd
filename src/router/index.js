import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Index from '../view/index/index.js'
import Book from '../view/book/index.js'
import About from '../view/about/index.js'
import User from '../view/user/index.js'
import Details from '../view/details/index.js'
export default class RouterIndex extends Component{
    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => (
                    <Redirect to="/index/all"/>
                )}></Route>
                <Route path="/index/:id" component={Index}></Route>
                <Route path="/book" component={Book}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/details" component={Details}></Route>
            </Switch>
        )
    }
}