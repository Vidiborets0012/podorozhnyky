// # /

import { Container } from "@/components/ui/Container/Container";

export default function Home() {
  // return <div>Home</div>;
  //*** */
  // return (
  //   <div className="container">
  //     <section style={{ background: "#eaeaea", padding: "40px 0" }}>
  //       <h1>Home</h1>
  //       <h2>Test Container</h2>
  //       <p>Це тестовий блок для перевірки адаптивності контейнера.</p>
  //       <div style={{ background: "blue", height: "50px", width: "100%" }} />
  //     </section>
  //   </div>
  // );
  //*** */
  return (
    <section style={{ background: "#f4f4f4", padding: "60px 0" }}>
      <Container>
        <h1>Проект, створений для тих, хто живе подорожами</h1>

        <p style={{ marginTop: "20px", maxWidth: "600px" }}>
          Ми віримо, що кожна подорож — це унікальна історія, варта того, щоб
          нею поділилися. Наша платформа створена, щоб об&apos;єднати людей,
          закоханих у відкриття нового.
        </p>
      </Container>
    </section>
  );
}
