import React from 'react';
import Layout from '../components/Layout';
import hseni from '../assets/images/hseni.png';
import hsa from '../assets/images/HSA-logo.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Health & Safety</h2>
        <br />
        <p>ComSecDivings' mantra conveyed through a simple phrase:</p>
        <p>"Health & Safety..... Its no joke!"</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <center>
            <span className="image center">
              <a
                href="https://www.hsa.ie/eng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={hsa} alt="HSA" width="272" height="130" />
              </a>
            </span>
            <span className="image center">
              <a
                href="https://www.hseni.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={hseni} alt="HSE NI" width="272" height="130" />
              </a>
            </span>
          </center>
          <br />
          <br />
          <p>
            At CSD more than anything else Health & Safety is at the heart of
            everything we do. We operate a zero risk policy. From the start of
            every consultation, through to site visits and conversations with
            clients, Health & Safety is at the forefront of our planning.
          </p>
          <p>
            At CSD we believe That the safety of our employees and that of our
            clients employees are of paramount importance. By investing time and
            effort in risk management up front, ComSecDiving can derive enormous
            benefits by avoiding significant problems downstream. Being
            proactive and treating the cause (the risk) is always preferable to
            being reactive and treating the symptoms (the impact).
          </p>

          <p>ComSecDiving will always adhere to the:</p>
          <ul>
            <li>
              {' '}
              Diving at Work Regulations (Northern Ireland) 2005 (N. Ireland &
              UK)
            </li>
            <li>
              Commercial Diving Projects Inshore/Inland Approved Codes of
              Practice (rev Dec 2014) (N. Ireland & UK)
            </li>
            <li>
              {' '}
              Scientific and archaeological diving projects Diving at Work
              Regulations 1997 (rev Dec 2014) (N. Ireland & UK)
            </li>
            <li>
              {' '}
              Management of Health and Safety at Work Regulations (Northern
              Ireland) 2000. (N. Ireland & UK)
            </li>
            <li>
              {' '}
              Health and Safety (Training for Employment) Regulations (Northern
              Ireland) 1994. (N. Ireland & UK)
            </li>
            <li>
              {' '}
              The Working Time Regulations (Northern Ireland) 1998 (N. Ireland &
              UK)
            </li>
            <li>
              {' '}
              Safety in Industry (Diving Operations) Regulations, 1981 (S.I. No.
              422 of 1981). (Ireland)
            </li>
          </ul>

          <p>
            ComSecDiving staff will at all times stay alert, stay healthy, stay
            focused and make our work space safe and risk free.
          </p>
          <p>
            We do this by using the best and safest equipment and tools
            available. By having planned preventative maintenance systems in
            place for timely servicing of all equipment. If its not in test its
            not onboard! Dive team members are reminded at the start of each
            shift/day of their obligations to the company and moreover to each
            other and themselves in relation to their safety, health and well
            being while working for CSD.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
