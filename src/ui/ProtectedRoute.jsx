import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load Authorized user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If no user, then redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. Show spinner till user loads
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. If user found, then redirect to app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
