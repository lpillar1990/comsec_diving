import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/comsec1.jpg';
import pic2 from '../assets/images/comsec2.jpg';
import pic3 from '../assets/images/comsec4.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              {/* <a href="/#" className="button primary">
                Explore
              </a> */}
            </Scroll>
          </li>
        </ul>
      </div>

      <Scroll type="id" element="one">
        <a href="#one" className="more"></a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            ComSecDiving... not just another
            <br />
            diving & marine contractor.
          </h2>
          <p>
            At the start of CSD being established there was one driving force,
            Health & Safety. Whether we like it or not diving has risks.
            However, these risks can be controlled, mitigated or reduced to a
            safe level. All CSD staff take ownership of Health & Safety at every
            level. It has to be that way, its the way we work. We are likeminded
            in our determination to make our job safe for ourselves and our
            clients. We believe gaining and keeping the trust of our clients,
            indeed any persons in contact with CSD is of paramount importance.
            If you feel the same way, then you might like to get in touch with
            us.
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Magna primis lobortis
            <br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Mission Statement</h2>
          <p>
            ComSecDiving's mission is to provide our clients with a
            professional, safe and efficient workforce. Our team have the
            knowledge and experience to meet your requirements. We will continue
            to maintain our outstanding safety record while meeting and
            surpassing your expectations. Our friendly and efficient team can
            adapt to help solve potential problems before they arise and
            therefore keep the job on target and within budget.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-ship">
            <h3>Values</h3>
            <p>
              Act with uncompromising honesty and integrity in everything we do.
            </p>
          </li>
          <li className="icon solid fa-theater-masks">
            <h3>Accountability</h3>
            <p>
              We are accountable – individually and in teams – for our
              behaviours, actions and results.
            </p>
          </li>
          <li className="icon solid fa-thumbs-up">
            <h3>Success</h3>
            <p>
              We view our success as dependent on our customers' success, both
              now and in the future. Satisfied customers are essential. We will
              achieve total customer satisfaction by understanding what the
              customer wants and delivering it flawlessly. We do what we say we
              will do.
            </p>
          </li>
          <li className="icon solid fa-users">
            <h3>Teamwork</h3>
            <p>
              Work together effectively to achieve our goals, while encouraging
              individual contribution and responsibility. We will continually
              learn, share ideas and knowledge. We will encourage cooperative
              efforts at every level and across all activities in our company.
            </p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
