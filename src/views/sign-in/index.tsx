import React from 'react';
import { Field, Form, Formik } from 'formik';

import './index.scss';

const SignIn = () => {

  return (
    <div className="d-flex items-center justify-center sign-in-layout">
      <div className="d-flex sign-in-wrapper">
        <div className="flex-1 side-layout">

        </div>

        <div className="flex-1 form-layout">

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={() => {
              
            }}
            >
            {({ values, }) => (
              <div className="h-full flex items-center">
                <Form className="mx-auto sign-in-form">
                  <h3 className="mb-4">Hello!</h3>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <Field name="email" placeholder="email" className="input input-bordered" />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <Field name="password" placeholder="password" className="input input-bordered" />
                  </div>

                  <button className="btn w-full mb-4">Sign In</button> 

                  <div className="flex items-center">
                    <p>Don't have an account?</p>{' '}
                    <button className="btn btn-link btn-sign-up">Sign up</button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
        </div>
    </div>
  );

}

export default SignIn;