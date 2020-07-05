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
            <p>
              <label>
                <input placeholder="Name*" type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                  name="email"
                />
              </label>
            </p>
            <p>
              <label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone*"
                  name="phone"
                />
              </label>
            </p>
            <p>
              <label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  placeholder="Subject"
                  name="subject"
                />
              </label>
            </p>
            <p>
              <label>
                <textarea
                  className="mt-3"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </label>
            </p>
            <p>
              <button type="submit" class="primary">
                Send
              </button>
            </p>
          </form>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
