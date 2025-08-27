/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
  // Use your Google Docs resume link
  const resumeData =
    'https://docs.google.com/document/d/1yOBbCqmMtrcA8jropqUqdV3kVwIxZmKaF0YHJdmWg7s/edit?usp=sharing';

  // For preview, use the embed version of your Google Doc
  const previewData =
    'https://docs.google.com/document/d/1yOBbCqmMtrcA8jropqUqdV3kVwIxZmKaF0YHJdmWg7s/preview';

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
          <article>
            <h1 className="intro__text">Resumé.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <Link href="/contact">contact page</Link>
              </b>{' '}
              .{' '}
              <b>
                <a
                  href={resumeData}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resume"
                >
                  view
                </a>
              </b>{' '}
              or{' '}
              <b>
                <a
                  href={resumeData}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  download
                </a>
              </b>{' '}
              the resume{' '}
            </p>
          </article>
          <br />
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Your Resume"
          />
        </PageSection>
        <br />
        <br />
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Are you convinced to contact me now ?
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
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;
export default Resume;