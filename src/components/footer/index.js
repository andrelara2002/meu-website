import React, { Component } from 'react';

export default function footer() {
    return (
        <footer>
            <button onClick={() => { window.open(this.state.info.blog_link) }}>Linkedin</button>
            <button onClick={() => { window.open(this.state.info.github_link) }}>Github</button>
        </footer>)
}