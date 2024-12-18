import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useParams,
} from "react-router-dom";
import {
  Box,
  Container,
  CircularProgress,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { theme } from "./Components/Theme/Theme";

// Importação dinâmica dos componentes
const AppBar = React.lazy(() => import("./Components/TopBar/AppBar"));
const Footer = React.lazy(() => import("./Components/Footer/Normal/Footer"));
const Overview = React.lazy(() => import("./Components/Overview/Overview"));
const SignIn = React.lazy(() => import("./Components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./Components/SignUp/SignUp"));
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));
const Contracts = React.lazy(() => import("./Components/Contracts/Contracts"));
const Blog = React.lazy(() => import("./Components/Blog/Blog"));
const Profile = React.lazy(() => import("./Components/Profile/Profile"));
const MinimalistFooter = React.lazy(
  () => import("./Components/Footer/Minimalist/Footer"),
);

const LoadingFallback = () => (
  <Container
    maxWidth={"xl"}
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
  >
    <Box>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#0072ff" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </Box>
  </Container>
);

const App = () => {
  // Criação de referências para as seções de destino no Overview
  const overviewRef = React.createRef();
  const featuresRef = React.createRef();
  const testimonialsRef = React.createRef();
  const highlightsRef = React.createRef();
  const pricingRef = React.createRef();
  const faqRef = React.createRef();

  // Função de rolagem para seções específicas
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Redirecionamento para o perfil
  const RedirectToProfile = () => {
    const { uuid } = useParams();
    return <Navigate to={`/topskill/users/${uuid}/profile`} replace={true} />;
  };

  // Definição do roteamento
  const router = createBrowserRouter([
    {
      path: "/topskill",
      element: <Navigate to="/topskill/overview" replace={true} />,
    },
    {
      path: "/topskill/signin",
      element: (
        <React.Suspense fallback={<LoadingFallback />}>
          <SignIn />
        </React.Suspense>
      ),
    },
    {
      path: "/topskill/signup",
      element: (
        <React.Suspense fallback={<LoadingFallback />}>
          <SignUp />
        </React.Suspense>
      ),
    },
    {
      path: "/topskill/dashboard",
      element: (
        <>
          <React.Suspense>
            <AppBar />
          </React.Suspense>
          <React.Suspense fallback={<LoadingFallback />}>
            <Box display={"flex"} sx={{ width: "100%", maxWidth: "100vw" }}>
              <Dashboard />
            </Box>
          </React.Suspense>
        </>
      ),
    },
    {
      path: "/topskill/overview",
      element: (
        <>
          <React.Suspense>
            <AppBar
              scrollToSection={scrollToSection}
              overviewRef={overviewRef}
              featuresRef={featuresRef}
              testimonialsRef={testimonialsRef}
              highlightsRef={highlightsRef}
              pricingRef={pricingRef}
              faqRef={faqRef}
            />
            {/* Passando a função para o AppBar */}
          </React.Suspense>
          <React.Suspense fallback={<LoadingFallback />}>
            <Box maxWidth={true} width={"100%"} textAlign={"left"}>
              <Overview
                overviewRef={overviewRef}
                featuresRef={featuresRef}
                testimonialsRef={testimonialsRef}
                highlightsRef={highlightsRef}
                pricingRef={pricingRef}
                faqRef={faqRef}
              />{" "}
              {/* Passando todas as refs necessárias */}
              <Footer />
            </Box>
          </React.Suspense>
        </>
      ),
    },
    {
      path: "/topskill/contracts",
      element: (
        <>
          <React.Suspense>
            <AppBar />
          </React.Suspense>
          <React.Suspense fallback={<LoadingFallback />}>
            <Box maxWidth={"100vw"} width={"100%"}>
              <Contracts />
            </Box>
          </React.Suspense>
        </>
      ),
    },
    {
      path: "/topskill/blog",
      element: (
        <>
          <React.Suspense>
            <AppBar
              scrollToSection={scrollToSection}
              overviewRef={overviewRef}
              featuresRef={featuresRef}
              testimonialsRef={testimonialsRef}
              highlightsRef={highlightsRef}
              pricingRef={pricingRef}
              faqRef={faqRef}
            />
          </React.Suspense>
          <React.Suspense fallback={<LoadingFallback />}>
            <Container
              maxWidth="true"
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                margin: 0,
                padding: "0 !important",
              }}
            >
              <Box maxWidth={true}>
                <Blog />
                <Footer />
              </Box>
            </Container>
          </React.Suspense>
        </>
      ),
    },
    {
      path: "/topskill/users/:uuid", // Redireciona para o perfil usando RedirectToProfile
      element: (
        <React.Suspense fallback={<LoadingFallback />}>
          <RedirectToProfile />
        </React.Suspense>
      ),
    },
    {
      path: "/topskill/users/:uuid/profile",
      element: (
        <>
          <React.Suspense>
            <AppBar />
          </React.Suspense>
          <React.Suspense fallback={<LoadingFallback />}>
            <Container
              maxWidth="true"
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                margin: 0,
                padding: "0 24px 0 24px !important",
              }}
            >
              <Box maxWidth={true}>
                <Profile />
                <MinimalistFooter />
              </Box>
            </Container>
          </React.Suspense>
        </>
      ),
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};

export default App;
