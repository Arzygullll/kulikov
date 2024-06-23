import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "150px" }}>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            <img
              src={
                "https://kulikov.com/upload/landing/99f/fdr9gjdulan6d5pq6v8hk91xnaina923/%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9@1x.png"
              }
              alt="Kulikov"
              style={{ height: 80, marginRight: 15 }}
            />
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "#9a69cb", fontSize: "16px", fontWeight: "700" }}
          >
            КОРОТКО
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "black",
              fontSize: "40px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            О НАС
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#999",
              fontWeight: "600",
              fontSize: "16px",
              marginTop: "30px",
            }}
          >
            Мы — большая и дружная семья Фиолетовых! Мы — Кондитерский дом
            "Куликовский"!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "#9a69cb",
              fontSize: "14px",
              fontWeight: "700",
              marginTop: "40px",
              paddingLeft: "10px",
            }}
          >
            МИНУТКА ИСТОРИИ
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "black",
              fontSize: "40px",
              fontWeight: "500",
              marginTop: "20px",
              paddingLeft: "30px",
            }}
          >
            В 1991 ГОДУ...
          </Typography>

          <hr
            style={{
              width: "220px",
              marginLeft: "260px",
              height: "20px",
              backgroundColor: "#9a69cb",
              marginTop: "20px",
            }}
          />
        </Grid>

        {/* О нас */}
        <Grid item xs={12}>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#999",
              fontWeight: "400",
              fontSize: "16px",
              marginTop: "30px",
              width: "800px",
              marginLeft: "30px",
            }}
          >
            В 1991 году Олег Борисович Куликов испек торт "Птичье молоко", с
            которого началась история большой и дружной фиолетовой семьи и
            бренда "Куликовский". В самом начале производство Куликовских тортов
            было семейным делом, которое имело в своем активе лишь небольшую
            кухню в типовой квартире в городе Бишкек.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#999",
              fontWeight: "400",
              fontSize: "16px",
              marginTop: "30px",
              width: "800px",
              marginLeft: "30px",
            }}
          >
            Постепенно нарабатывались клиенты, росла популярность. Вместе с ней
            рос ассортимент предлагаемых десертов и место, где все это
            производилось. Так за 10 лет дело выросло в небольшую семейную
            кондитерскую со своим цехом, салоном заказов и преданными клиентами.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#999",
              fontWeight: "400",
              fontSize: "16px",
              marginTop: "30px",
              width: "800px",
              marginLeft: "30px",
            }}
          >
            В миллениум мы вошли уже известной на весь город и область
            компанией. Популярность продолжала расти и пространства для выпуска
            продукции требовалось уже больше. В 2004 году мы приняли решение о
            переезде на новую территорию, которой предстояло стать уже настоящей
            производственной площадкой.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#999",
              fontWeight: "400",
              fontSize: "16px",
              marginTop: "30px",
              width: "800px",
              marginLeft: "30px",
            }}
          >
            С тех пор мы выросли более чем в 5 раз. Территория нашей фабрики
            выросла до 4000 кв.м. Цехов стало уже 4, к тому же появилась
            собственная площадка по производству молочной продукции. Помимо
            фабрики на сегодня у нас уже более 100 собственных фирменных
            магазинов в трех странах (Кыргызстан, Казахстан и Россия). А общее
            количество сотрудников составляет более 1500 человек.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#999",
              fontWeight: "400",
              fontSize: "16px",
              marginTop: "30px",
              width: "800px",
              marginLeft: "30px",
            }}
          >
            За годы нашего существования вместе с нами выросло очень много
            людей. И мы счастливы делить с нашими клиентами самые важные и
            теплые события нашей жизни. Например, наши Дни рождения! С 2016 года
            мы провели уже несколько семейных фестивалей на свой День рождения в
            двух странах.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#999",
              fontWeight: "400",
              fontSize: "16px",
              marginTop: "30px",
              width: "800px",
              marginLeft: "30px",
            }}
          >
            И мы продолжаем расти и развиваться!
          </Typography>
        </Grid>

        <Container maxWidth="md" sx={{ marginTop: "150px" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "#9a69cb",
              fontSize: "14px",
              fontWeight: "700",
              paddingLeft: "10px",
            }}
          >
            В ЧЕМ НАША ОСОБЕННОСТЬ?
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "black",
              fontSize: "40px",
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            МЫ ИСПОЛЬЗУЕМ
          </Typography>

          <hr
            style={{
              width: "220px",
              marginLeft: "305px",
              height: "20px",
              backgroundColor: "#9a69cb",
              marginTop: "20px",
            }}
          />

          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ marginTop: "20px" }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" align="center">
                НАСТОЯЩИЕ МОЛОЧНЫЕ СЛИВКИ
              </Typography>
              <Typography variant="body1" align="center" sx={{ color: "#999" }}>
                В производстве своих десертов мы используем только настоящие
                сливки из коровьего молока 38% жирности. Это принципиальная
                позиция. Мы против использования искусственных и токсичных
                заменителей сливок животного происхождения.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" align="center">
                НАТУРАЛЬНОЕ СЫРЬЕ
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ marginTop: "32px", color: "#999" }}
              >
                Мука, орехи, яйца, масло, свежие ягоды, сухофрукты и т.д. — все
                сырье, из которого мы изготавливаем наши десерты проходит
                жесткий контроль специалистов в нашей собственной лаборатории.
                Нам важно, чтобы к вам на стол попадал безопасный и полезный
                продукт, который принесет не только радость, но и пользу!
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" align="center">
                СИСТЕМУ ПИЩЕВОЙ БЕЗОПАСНОСТИ
              </Typography>
              <Typography variant="body1" align="center" sx={{ color: "#999" }}>
                Наша компания одна из первых в Кыргызстане была сертифицирована
                и стала обладателем действующего сертификата системы пищевой
                безопасности FSSC 22 000. Данная система позволяет нам
                контролировать качество работы и самого продукта на всех этапах
                производства.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" align="center">
                СИСТЕМУ ЗАМОРОЗКИ SMART FROST
              </Typography>
              <Typography variant="body1" align="center" sx={{ color: "#999" }}>
                Мы не используем искусственных консервантов. Но нам важно
                доставлять продукцию в разные страны. Поэтому мы разработали
                уникальную систему поэтапной глубокой заморозки десертов. Данная
                система позволяет нам изготавливать достаточное количество
                продукции и сохранять ее вид, вкус и качество до 90 дней.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Grid item xs={12} className="video-container">
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: "500",
              fontSize: "40px",
              marginTop: "60px",
              marginBottom: "30px",
            }}
          >
            Документальный фильм о компании
          </Typography>
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/ru0SA6f4ZVQ"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Grid>

        <Grid item xs={12}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              align="center"
              sx={{
                marginTop: "20px",
                cursor: "pointer",
                color: "#9a69cb",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              Вернуться на главную страницу
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            © 2024 | Кондитерский дом «Куликовский». Все права защищены.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
