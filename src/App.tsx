import React, {useState, useRef} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from './Input.js';
import './App.global.css';

import { WebView }  from './components/webview/index'

interface FormData {
  url: string;
}

const Index: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const [url, setUrl] = useState("")

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data.url)
    setUrl(data.url)
  };


  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Form className="d-flex" ref={formRef} onSubmit={handleSubmit}>
            <Input name="url" type="text" />
            <button className="btn btn-outline-success" type="submit">Ok</button>
          </Form>
        </div>
      </nav>
      <WebView loadUrl={url} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}
