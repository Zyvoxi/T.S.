import * as React from "react";
import {
  Skeleton,
  Backdrop,
  Paper,
  Box,
  Modal,
  Typography,
  Fade,
  Avatar,
} from "@mui/material";
import "./Style/MCSS.css";

const ModalRender = ({ show, onClose, article }) => {
  if (!show) {
    setTimeout(() => {
      return null;
    }, 2000);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={show}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={show}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

const Article = ({ title, text, imgSrc, onClick }) => {
  const [elevation, setElevation] = React.useState(2);

  return (
    <Paper
      onClick={onClick}
      elevation={elevation}
      onMouseEnter={() => setElevation(13)} // Aumenta a elevação no hover
      onMouseLeave={() => setElevation(2)} // Retorna à elevação original ao sair do hover
      sx={{
        padding: "10px",
        width: "100%",
        maxWidth: "402px",
        borderRadius: "25px",
        height: "150px",
        backgroundColor: "#fefefe41",
        display: "flex",
        flexDirection: "row",
        transition: "transform 0.1s ease, box-shadow 0.25s ease", // Mantém a transição suave
        "&:hover": {
          transform: "scale(1.04)", // Efeito de escala ao passar o mouse
          cursor: "pointer",
        },
      }}
    >
      <Avatar src={imgSrc} alt={title} sx={{ width: 150, height: 150 }} />
      <Box>
        <Box>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">{text}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

function Main() {
  const [articlesData, setArticlesData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=128&nat=br"
        );
        const data = await response.json();
        const articles = data.results.map((user) => ({
          title: `${user.name.first} ${user.name.last}`,
          email: `${user.email}`,
          phone: `${user.phone}`,
          location: {
            state: user.location.state,
            city: user.location.city,
            country: user.location.country,
          },
          text: `Generated user from ${user.location.city}, ${user.location.country}.`,
          imgSrc: user.picture.large,
          rating: Math.floor(Math.random() * 6),
        }));
        setArticlesData(articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!loading) {
    return (
      <section className="Main-Section">
        {/* Simulação de esqueleto para carregamento de 20 artigos */}
        {Array.from({ length: 200 }).map((_, index) => (
          <Paper
            key={index}
            sx={{
              padding: "10px",
              marginBottom: "15px",
              width: "100%",
              maxWidth: "402px",
              height: "150px",
              borderRadius: "25px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="Profile-Pic"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Skeleton variant="circular" width={150} height={150} />
            </div>
            <div
              className="Infos"
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Box justifyContent={"center"}>
                <Skeleton
                  variant="text"
                  width="80%"
                  height={35}
                  sx={{ margin: "5px", marginLeft: "calc(14% - 5px)" }}
                />
              </Box>
              <div
                className="Article-Main-Info"
                style={{ marginLeft: "10px", maxWidth: "250px" }}
              >
                <Skeleton
                  variant="text"
                  width="100%"
                  height={20}
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton variant="text" width="100%" height={20} />
              </div>
            </div>
          </Paper>
        ))}
      </section>
    );
  }

  return (
    <>
      <section className="Main-Section">
        {articlesData.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            text={article.text}
            imgSrc={article.imgSrc}
            onClick={() => handleArticleClick(article)}
          />
        ))}
      </section>

      <ModalRender
        show={showModal}
        onClose={handleCloseModal}
        article={selectedArticle}
      />
    </>
  );
}

export default Main;
