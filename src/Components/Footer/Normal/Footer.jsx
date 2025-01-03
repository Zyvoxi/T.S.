import * as React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import logger from "../../../Extras/Debug/debug";
import logo from "../../../Assets/Logo/TSLogoIcon.svg";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
        {"T.S. © "}
        <Link
          color="text.secondary"
          target="_blank"
          href="https://github.com/Zyvoxi"
          aria-label="GitHub profile of Zyvoxi"
        >
          Zyvoxi
        </Link>
        &nbsp;
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Licensed under{" "}
        <Link
          color="text.secondary"
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc/4.0/legalcode.pt"
          aria-label="CC BY-NC"
        >
          CC BY-NC
        </Link>
        .
      </Typography>
    </div>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  const handleFooterClick = (option) => {
    // Verifica a opção selecionada e realiza a ação correspondente
    if (option === "inicio") {
      navigate("/topskill/dashboard"); // Redireciona para a página inicial
    } else if (option === "contratos") {
      navigate("/topskill/contracts");
    } else if (option === "blog") {
      navigate("/topskill/blog");
    }
  };

  React.useEffect(() => {
    logger.debug("O componente 'Footer' foi carregado.");
  });

  return (
    <React.Fragment>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "100%" }, textAlign: "left" }}>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                alignItems={"center"}
                display={"flex"}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                TOPSKILL
              </Typography>
              <Typography
                variant="body2"
                gutterBottom={true}
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Cadastre-se para receber nossas novidades
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 2 }}
              >
                Inscreva-se para atualizações semanais. Spams jamais!
              </Typography>
              <InputLabel htmlFor="email-newsletter">Email</InputLabel>
              <Stack direction="row" spacing={1} useFlexGap={true}>
                <TextField
                  id="email-newsletter"
                  hiddenLabel={true}
                  size="small"
                  variant="outlined"
                  fullWidth={true}
                  aria-label="Digite seu endereço de e-mail"
                  placeholder="Seu endereço de e-mail"
                  slotProps={{
                    htmlInput: {
                      autoComplete: "off",
                      "aria-label": "Digite seu endereço de e-mail",
                    },
                  }}
                  sx={{ width: "250px" }}
                />
                <Button variant="contained" color="primary" size="small">
                  Inscrever-se
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Produtos
            </Typography>
            <Link
              color="text.secondary"
              variant="body2"
              onClick={() => {
                handleFooterClick("inicio");
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Dashboard
            </Link>
            <Link
              color="text.secondary"
              variant="body2"
              onClick={() => {
                handleFooterClick("contratos");
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Contratos
            </Link>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              FAQs
            </Link>
            <Link
              color="text.secondary"
              variant="body2"
              onClick={() => {
                handleFooterClick("blog");
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Blog
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Empresa
            </Typography>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Sobre nós
            </Link>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Carreiras
            </Link>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Imprensa
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Legal
            </Typography>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Termos
            </Link>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Privacidade
            </Link>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Contato
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Política de Privacidade
            </Link>
            <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link
              color="text.secondary"
              variant="body2"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Termos de Serviço
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap={true}
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
            <IconButton
              color="inherit"
              size="small"
              target="_blank"
              href="https://github.com/Zyvoxi/T.S."
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <GitHub />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
