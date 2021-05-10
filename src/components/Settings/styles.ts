import styled from 'styled-components';
import { rgba, shade } from 'polished';
import { motion } from 'framer-motion';

export const ButtonSetting = styled.button`
  z-index: 999;
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  border: none;
  font-size: 0;

  background: #8dd4f7;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 1px 1rem ${rgba('#8dd4f7', 0.2)};

  &:hover {
    background: ${shade(0.2, '#8dd4f7')};
  }

  svg {
    font-size: 1.5rem;
    color: var(--white);
  }
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
`;

export const ClosedBackground = styled(motion.button)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;

  border: none;
  user-select: none;
  outline: none;
  background: rgba(0, 0, 0, 0);
  z-index: 9999;
`;

export const ModalContent = styled(motion.nav)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: var(--white);
  border-radius: 0.25rem;
  z-index: 99999;

  padding: 2rem;

  ul {
    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 2rem;
      }

      label {
        margin-left: 1rem;
        color: var(--gray-600);
      }
    }
  }
`;
