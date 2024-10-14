import { Container } from "@/components/shared/Container";
import { Flex } from "@/components/shared/Flex";
import { Header } from "@/components/shared/Header";
import { TopBar } from "@/components/shared/Top-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="pt-[90px]" >
      <TopBar />
    </Container>
  );
}
