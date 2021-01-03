import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '@components/layout';
import tw from 'twin.macro';

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
const components = {
  h1: props => (
    <>
      <h2 {...props} className="mt-7" /> <hr className="mb-4" />
    </>
  ),
  h2: props => <h3 {...props} className="mt-4" />,
  h3: props => <h4 {...props} />,
  p: props => <p {...props} />,
  table: props => <table {...props} className="my-2 text-left" />,
  thead: props => <thead {...props} className="uppercase" />,
  th: props => (
    <th {...props} className="w-1/4 align-top text-gray-800 pb-0.5" />
  ),
  td: props => <td {...props} className="align-top text-gray-700 pr-2" />,
};

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) {
  console.log({ body });
  return (
    <Layout title={title} maxWidth={false}>
      <Wrapper>
        <h1>{title}</h1>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
  ${tw`gap-x-0 lg:gap-x-8`}

  & > * {
    grid-column: 2;
  }

  .reading-width {
    width: min(65ch, 100%);
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }

  .left-col {
    width: 100%;
    grid-column: 1 / 2;
  }

  .right-col {
    width: 100%;
    grid-column: -2 / -1;
  }

  //provide base styles (applied across both MDX and rendered components)

  h1 {
    ${tw`text-4xl mb-2`}
  }

  h2 {
    ${tw`text-3xl mb-2.5`}
  }

  h3 {
    ${tw`text-2xl mb-3 font-bold`}
  }

  h4 {
    ${tw`text-xl`}
  }

  p {
    ${tw`leading-normal mb-2`}
  }
`;
