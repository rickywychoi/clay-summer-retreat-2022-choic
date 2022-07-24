import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();
  const navigateTo = (routeTo: string) => {
    navigate(routeTo, { replace: true });
  };
  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigateTo('/');
    }
  };

  return { navigateTo, goBack };
};
