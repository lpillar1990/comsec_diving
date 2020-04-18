import React from 'react';
import Layout from '../components/Layout';
import comsec5 from '../assets/images/comsec5.jpg';
import tugboat from '../assets/images/barge.jpg';
import minesto from '../assets/images/minesto.jpg';
const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Comsec Diving</h2>
        <p>Diving & Marine Contractors</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h2>Diving Services</h2>
          <p>
            {' '}
            <span className="image left">
              <img src={comsec5} alt="commercial diving burning" />
            </span>
            ComSec diving has a solid understanding of the marine environment
            and uses the latest equipment and technology available to carry out
            diving operations. We provide an experienced and reliable safety
            aware workforce with experience in the Oil & Gas, Civil Engineering,
            Marine Renewable Energy and Power Generation industries.
          </p>
          <br />
          <br />
          <p>
            Our flexible approach means we can supply a bespoke solution with
            singular or multiple teams. ComSec Diving are able to provide an
            unrivalled knowledge in underwater operations, with members of our
            dedicated team of engineering professionals specialising in the
            following fields:
          </p>
          <ul>
            <li>Cathodic Protection</li>
            <li>Scour and Asset Protection</li>
            <li>Underwater Cutting and Welding</li>

            <li>Marine Salvage Operations</li>
            <span className="image right">
              <img src={tugboat} alt="Belfast tugboat" />
            </span>
            <li>Dock and Quay Repairs</li>
            <li>Dredging / Airlifting / Trenching</li>
            <li>Sub-sea Construction and Repair</li>
            <li>Cable Installation and Burial</li>
            <li>Ship Maintenance</li>
            <li>Reservoir and River Works</li>
            <li>H.P. Water Jetting</li>
            <li>Bridge Inspection and Survey</li>
            <li>Lock and Weir Inspections</li>
            <li>Power Station Inspection Repair and Maintenance</li>
            <li>Confined Space Operations</li>
            <li>Concrete and Grout Replacement</li>
            <li>Detailed Inspection Reporting</li>
            <li>ROV Surveys</li>
          </ul>

          <hr />
          <span className="image right">
            <img src={minesto} alt="Minesto seakite" />
          </span>
          <p>
            ComSecDiving have extensive experience of Diving Surface Supply on
            Tidal Energy Projects. These types of Dives are dependent on Diving
            Slack periods of the tide, taking into account Tide Tables, High &
            Low Pressure weather systems at site and the use of Historical and
            Real Time Acoustic Doppler Current Profiler (ADCP) readings.
          </p>

          <p>
            Complete hull surveys, including still and video colour photography
            documentation. Complete running gear inspection, including struts,
            fairwaters, rope guards, propellers, rudders, sonar domes, bilge
            keel, stabilising fins, complete hull, bow and stern thrusters,
            Azimuth thrusters, Azipod thrusters NDT inspections of hull shell
            plating and other underwater appendages.
          </p>
          <hr />
          <div className="center">
            <center>
              ***ALL dive Ops communications and CCTV are recorded and stored***
            </center>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
