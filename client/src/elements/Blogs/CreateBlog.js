import React from "react";
import { Form, Field } from "react-final-form";
import {submitBlog} from "../../actions/index";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';

function CreateBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const OnSubmit = blog_post => {
        dispatch(submitBlog(blog_post));
        navigate('/blog');
    }
    return (
    <div>
      <Form
        onSubmit={OnSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Title Required";
          }
          if (!values.body) {
            errors.body = "Body Required";
          }
          return errors;
        }}
        render={({
          handleSubmit,
          submitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title">
              {({ input, meta }) => (
                <div>
                  <label>Title</label>
                  <input {...input} type="text" placeholder="Title" />
                  {meta.error && meta.touched && <span>{meta.submitError || meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <Field name="body" component="textarea" placeholder="Body">
                {({ input, meta }) => (
                  <div>
                    <label>Body</label>
                    <textarea {...input} type="text" placeholder="Body" />
                    {meta.error && meta.touched && <span>{meta.submitError || meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className="buttons">
              <button type='submit' className="waves-effect right waves-light btn" disabled={submitting}>
               Submit
              </button>
              <Link to="/blog" className="waves-effect waves-light btn">
                Go Back
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default CreateBlog;
