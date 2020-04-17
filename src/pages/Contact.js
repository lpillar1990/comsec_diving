import React from 'react';
import Layout from '../components/Layout';
import comseclogo from '../assets/images/comsec-logo.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact CSD</h2>
        <p>Parkgate, Ballyclare, Northern Ireland</p>
        <p>Tel: 07738589663</p>
        <p>Email: Rab@comsecdiving.com</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <form method="post" action="#">
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
                    <input type="submit" value="Send" className="primary" />
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
