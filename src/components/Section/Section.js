import PropTypes from 'prop-types';
import { FeedbackSection, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
