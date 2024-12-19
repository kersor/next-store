import { Container } from "@/components/shared/container/Container";

export default function Home() {
  return (
    <Container>
      <div className="w-full h-[400px] relative">
        <div></div>
        <img className="absolute top-0 left-0 w-full h-full object-cover " src="/photos/photo_banner.png" alt="" />
      </div>
    </Container>
  );
}
