import * as React from "react";
import logo from "../../Assets/Logo/TSLogoIcon.svg";
import {
  Divider,
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Paper,
  FormLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { GoogleIcon } from "../../Assets/Icons/CustomIcons";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import logger from "../../Extras/Debug/debug";

/**
 * Função para validar se o input é um nome de usuário (aceita espaços) ou e-mail válido.
 * @param {string} input - O valor a ser validado.
 * @returns {boolean} - Retorna true se o input for válido, caso contrário false.
 */
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Valida um nome de usuário verificando se ele atende aos critérios especificados.
 *
 * @param {string} username - O nome de usuário a ser validado.
 * @returns {boolean} Retorna true se o nome de usuário for válido, caso contrário, false.
 * O nome de usuário deve ter pelo menos 3 caracteres e pode conter letras, números,
 * pontos, sublinhados, espaços e hífens.
 */
const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9._ -]{3,}$/;
  return usernameRegex.test(username);
};

/**
 * Componente SignIn que gerencia o processo de login do usuário.
 * O componente permite login via Google ou através de credenciais (nome de usuário/e-mail e senha).
 */
export default function SignUp() {
  // Estados para gerenciar as credenciais e erros de validação
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); // Hook para navegação programática

  // Função para lidar com a resposta e processamento dos dados solicitados
  const fetchAndProcessData = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  /**
   * Função de callback para lidar com a resposta de credenciais do Google.
   * @param {Object} response - Resposta do login do Google.
   */
  const handleCredentialResponse = React.useCallback(
    async (response) => {
      const token = response.credential; // Obtém o token de acesso

      logger.debug("TOKEN: ", token);

      try {
        const userData = jwtDecode(token); // Decodifica o token JWT para obter as informações do usuário
        const userId = crypto.randomUUID(); // Gera um UUID único para o usuário

        const companiesData = await fetchAndProcessData(
          "https://r2.storage.zyvoxi.com/Jsons/Companies.json",
        );
        const skillsData = await fetchAndProcessData(
          "https://r2.storage.zyvoxi.com/Jsons/Skills.json",
        );

        // Seleciona uma empresa e uma habilidade aleatoriamente
        const randomCompany =
          companiesData.companies[
            Math.floor(Math.random() * companiesData.companies.length)
          ];
        const randomSkill =
          skillsData.skills[
            Math.floor(Math.random() * skillsData.skills.length)
          ];

        // Cria um objeto de perfil do usuário (apenas informações "não-pessoais")
        const userProfile = {
          id: userId,
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
          dob: userData.birthday || "27/07/1997",
          location: "Extrema - MG",
          company: randomCompany,
          skill: randomSkill,
        };

        // Salva o perfil do usuário no armazenamento local (apenas para testes, nenhuma informação é enviada a servidores)
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        navigate("/topskill/dashboard"); // Redireciona para a página principal
      } catch (error) {
        console.error("SignUp - Erro:", error);
      }
    },
    [navigate],
  );

  /**
   * Função para iniciar o login via Google.
   */
  const handleGoogleLogin = React.useCallback(() => {
    logger.debug("login via google");
    if (google && google.accounts) {
      google.accounts.id.prompt(); // Verifica se google.accounts está disponível
    } else {
      console.error("google.accounts não está disponível");
    }
  }, []);

  /**
   * Função que valida as credenciais inseridas pelo usuário.
   */
  const handleLogin = React.useCallback(() => {
    let isValid = true;

    // Validação do campo de nome de usuário ou e-mail
    if (!username) {
      setUsernameError("O campo é obrigatório.");
      isValid = false;
    } else if (!validateUsername(username)) {
      setUsernameError(
        "Por favor, insira um nome de usuário ou e-mail válido.",
      );
      isValid = false;
    } else {
      setUsernameError("");
    }

    // Validação do campo de e-mail
    if (!email) {
      setEmailError("O campo é obrigatório.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Por favor, insira um nome de usuário ou e-mail válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validação da senha
    if (!password) {
      setPasswordError("O campo de senha é obrigatório.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      const handleLoginResponse = async () => {
        const userId = crypto.randomUUID(); // Gera um UUID único para o usuário

        const handleFetchError = (error) => {
          console.error("Error fetching data:", error);
          // Adiciona uma mensagem de erro ao usuário
        }; // Função para lidar com erros de fetch

        try {
          const companiesData = await fetchAndProcessData(
            "https://r2.storage.zyvoxi.com/Jsons/Companies.json",
          );
          const skillsData = await fetchAndProcessData(
            "https://r2.storage.zyvoxi.com/Jsons/Skills.json",
          );

          // Seleciona uma empresa e uma habilidade aleatoriamente
          const randomCompany =
            companiesData.companies[
              Math.floor(Math.random() * companiesData.companies.length)
            ];
          const randomSkill =
            skillsData.skills[
              Math.floor(Math.random() * skillsData.skills.length)
            ];

          // Cria um objeto de perfil do usuário
          const userProfile = {
            id: userId,
            name: username,
            email: `${username}@mail.com`,
            dob: "27/07/1997",
            location: "Extrema - MG",
            company: randomCompany,
            skill: randomSkill,
          };

          // Salva o perfil do usuário no armazenamento local (apenas para testes)
          localStorage.setItem("userProfile", JSON.stringify(userProfile));

          navigate("/topskill/dashboard"); // Redireciona para a página principal
        } catch (error) {
          handleFetchError(error);
        }
      };
      handleLoginResponse();
    }
  }, [username, email, password, navigate]); // O efeito é executado apenas uma vez na montagem

  // Efeito para preparar a página de login
  React.useEffect(() => {
    const signedUser = localStorage.getItem("userProfile");
    if (signedUser) {
      return navigate("/topskill/dashboard");
    }

    // Muda a cor do body para preto
    const backgroundStyle =
      "radial-gradient(circle, #f0f8fb, #f6fbff, #ffffff)";
    document.body.style.background = backgroundStyle;

    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client"; // URL do script do Google
      script.nonce = "P31415926535";
      script.async = true; // Carrega o script de forma assíncrona
      script.defer = true; // Atrasar a execução do script até que o documento seja analisado
      script.onload = () => {
        if (window.google) {
          google.accounts.id.initialize({
            client_id:
              "763143041695-60bjan0591o8rbm3juj9bk004cr9ng8e.apps.googleusercontent.com",
            callback: handleCredentialResponse, // Define a função de callback
          });
        }
      };
      document.body.appendChild(script); // Adiciona o script ao corpo do documento
    };

    loadGoogleScript(); // Carrega o script

    // Função de limpeza para cancelar a autenticação
    return () => {
      document.body.style.background = ""; // Restaura a cor original
      if (window.google && google.accounts) {
        google.accounts.id.cancel();
      }
    };
  }, [handleCredentialResponse, navigate]); // O efeito é executado apenas uma vez na montagem

  // Renderização do componente
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Paper
        elevation={15}
        sx={{ padding: 4, width: "100%", position: "relative" }}
      >
        {/* Logo e STOPSKILL lado a lado, no canto superior esquerdo */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="rotating-logo"
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
          />
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(90deg, #00c6ff, #0072ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              fontSize: "14px",
            }}
          >
            TOPSKILL
          </Typography>
        </Box>

        {/* Seção de Registro */}
        <Box mt={5} mb={3}>
          <Typography variant="h4" align="left" fontWeight={550}>
            Registrar-se
          </Typography>
        </Box>

        <Box mb={1} component={"form"}>
          {/* Campo de Nome de Usuário */}
          <Box mb={1}>
            <FormControl fullWidth={true} sx={{ textAlign: "left" }}>
              <FormLabel htmlFor="username">Nome completo</FormLabel>
              <TextField
                fullWidth={true}
                variant="outlined"
                placeholder="John Doe"
                autoComplete="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!usernameError}
                helperText={usernameError}
                slotProps={{
                  input: {
                    sx: {
                      borderRadius: "8px",
                    },
                  },
                }}
              />
            </FormControl>
          </Box>

          {/* Campo de email  */}
          <Box mb={1}>
            <FormControl fullWidth={true} sx={{ textAlign: "left" }}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                fullWidth={true}
                variant="outlined"
                placeholder="john.doe@email.com"
                autoComplete="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                slotProps={{
                  input: {
                    sx: {
                      borderRadius: "8px",
                    },
                  },
                }}
              />
            </FormControl>
          </Box>

          {/* Campo de Senha */}
          <Box mb={2}>
            <FormControl fullWidth={true} sx={{ textAlign: "left" }}>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <FormLabel htmlFor="password">Senha</FormLabel>
              </Box>
              <TextField
                fullWidth={true}
                variant="outlined"
                placeholder="••••••"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                slotProps={{
                  input: {
                    sx: {
                      borderRadius: "8px",
                    },
                  },
                }}
              />
            </FormControl>
          </Box>
        </Box>
        <Box
          mb={2}
          sx={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                sx={{ "&:hover": { bgcolor: "transparent" } }}
                disableRipple={true}
                color="default"
                inputProps={{ "aria-label": "Checkbox demo" }}
              />
            }
            label="Quero receber atualizações por e-mail."
          />
        </Box>
        {/* Botão Entrar */}
        <Box mb={2}>
          <Button fullWidth={true} variant="contained" onClick={handleLogin}>
            Registrar-se
          </Button>
          <Typography sx={{ textAlign: "center" }} mt={2}>
            Já possui uma conta?{" "}
            <Link
              component="button"
              type="button"
              onClick={() => {
                navigate("/topskill/signin");
              }}
              underline="none"
              sx={{
                color: "black",
                fontSize: "inherit", // Herda o tamanho de fonte
                lineHeight: "inherit", // Herda a altura da linha
                position: "relative", // Necessário para o posicionamento do ::after
                overflow: "hidden",
                "&::after": {
                  content: "''",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "0.1em",
                  backgroundColor: "#a3a4aa",
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
                  transition: "ease-out 400ms",
                },
                "&:hover::after, &:focus::after": {
                  transform: "translate3d(-100%, 0, 0)",
                },
              }}
            >
              Entrar
            </Link>
          </Typography>
        </Box>

        {/* Divisor "ou" */}
        <Box mb={2} width="100%">
          <Divider>ou</Divider>
        </Box>

        {/* Botão de login via Google */}
        <Box width="100%">
          <Button
            fullWidth={true}
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            sx={{
              color: "black",
              backgroundColor: "transparent",
              borderColor: "black",
              "&:hover": {
                borderColor: "#666",
              },
            }}
          >
            Registrar-se com Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
