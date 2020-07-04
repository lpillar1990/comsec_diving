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
          <form name="contact" method="POST" data-netlify="true">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue=""
                  placeholder="Name*"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue=""
                  placeholder="Email*"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  defaultValue=""
                  placeholder="Phone"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  defaultValue=""
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send"
                      className="primary"
                      href="lpillar1990@googlemail.com"
                    />
                  </li>
                  <li>
                    <input className="primary" type="reset" value="Reset" />
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
