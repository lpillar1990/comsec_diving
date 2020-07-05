import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact CSD</h2>
        <p>Ballyclare, Northern Ireland</p>
        <a href="tel:+447738589663">
          <p>Tel: +447738589663</p>
        </a>
        <p>Email: Rab@comsecdiving.com</p>{' '}
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <form
            className="form"
            name="contact"
            method="post"
            data-netlify="true"
          >
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  defaultValue=""
                  placeholder="Name*"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email*"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="phone"
                  defaultValue=""
                  placeholder="Phone"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="subject"
                  defaultValue=""
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="demo-message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      name="submit"
                      type="submit"
                      value="Send"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input
                      className="primary"
                      name="reset"
                      type="reset"
                      value="Reset"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
