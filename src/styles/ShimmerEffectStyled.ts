import styled from 'styled-components';

export const ShimmerEffect = styled.div`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #e7edf1b3 50%,
    #e7edf1 100%
  ) !important;

  background-size: 400% 400% !important;
  animation: shimmer 1.2s ease-in-out infinite !important;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const shimmerContent = styled(ShimmerEffect)`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #a1d1e1 50%,
    #e7edf1 100%
  ) !important;
`;

export const ShimmerTitle = styled(shimmerContent)`
  width: 70%;
  height: 2rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
`;

export const ShimmerText = styled(shimmerContent)`
  width: 90%;
  height: 1rem;

  & + div {
    width: 80%;
    margin-top: 4px;
  }

  & + div + div {
    width: 75%;
  }
`;

export const ShimmerCircle = styled(shimmerContent)`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
`;
