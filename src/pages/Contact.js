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
                  className="form-control"
                  placeholder="Name*"
                  name="name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                  name="email"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone*"
                  name="phone"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="mt-3"
                  placeholder="Message"
                  name="message"
                />
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input name="submit" type="submit" className="primary" />
                  </li>
                  <li>
                    <input name="reset" type="reset" className="primary" />
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
