import React from 'react';
import { Field, Form, Formik } from 'formik';

import './index.scss';

const SignUp = () => {

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
                    <span className="label-text">First name</span>
                  </label>
                  <Field name="firstName" className="input input-bordered" />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Last name</span>
                  </label>
                  <Field name="lastName" className="input input-bordered" />
                </div>

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
                  <Field name="password" placeholder="password" className="input input-bordered" as="password" />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Confirm password</span>
                  </label>
                  <Field name="confirmPassword" placeholder="confirm password" className="input input-bordered" as="password" />
                </div>

                <button className="btn w-full mb-4">Sign Up</button> 

                <div className="flex items-center">
                  <p>Already have an account?</p>{' '}
                  <button className="btn btn-link btn-sign-up">Sign In</button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );

}

export default SignUp;