import React from 'react';
import { Field, Form, Formik } from 'formik';

import './index.scss';

const SignIn = () => {

  return (
    <div className="grid grid-cols-2 sign-in-layout">
      <div className="side-layout">

      </div>

      <div className="form-layout">

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
                <h2 className="mb-4">Great to see you again</h2>

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
                  <Field name="email" placeholder="password" className="input input-bordered" />
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
  );

}

export default SignIn;