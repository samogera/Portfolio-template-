/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github,Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my about me section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/samogera"
                >
                  Engineering{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/samogera"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
<p>
  I am a Junior AI Engineer and Software Developer with a strong foundation in
  building full-stack applications, AI-powered tools, and scalable systems.
  With experience as a founder, I understand how to take ideas from concept to
  product, balancing clean engineering with real-world usability. My technical
  strengths include developing efficient backend systems, experimenting with
  machine learning models, and crafting intuitive frontends that create
  meaningful user experiences.
</p>
                </p>
              </li>

              <li>
                <Link href="/projects" aria-label="Open Products Page">
                  Product{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Projects Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Ventures
                </Link>
                <p>
                  As a co-founder and builder, I have taken products from idea to pilot,
                  including BrightEco Pay, a solar wallet, and MatXchange, a blockchain + AI
                  waste platform. I excel at blending technical execution with market research,
                  financial modeling, and user testing — ensuring that products are not just
                  launched, but truly adopted.
                </p>
              </li>
              <li>
                <Link
                  href="/projects"
                  aria-label="Open Projects Page"
                >
                  AI agents{' '}
            
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Projects Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Agents
                </Link>
                <p>
                  My recent focus has been on AI agents — experimenting with retrieval-augmented
                  generation, automation pipelines, and real-time data integration to build
                  assistants that learn, adapt, and deliver value across different contexts.
                  I’m particularly excited about applying AI to frontier markets where such
                  innovations can have outsized impact.
                </p>
              </li>
            </ul>
          </article>

        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
