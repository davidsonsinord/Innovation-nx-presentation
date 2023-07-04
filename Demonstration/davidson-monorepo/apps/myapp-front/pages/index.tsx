import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { JSONViewer } from "@org/component-library";

const backUrl = "http://127.0.0.1:8080/hello";

export function Index({
  backMessage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <JSONViewer url={backUrl} jsonObject={backMessage} />
    </div>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    backMessage: await fetch(backUrl).then((r) => r.json()),
  },
});
