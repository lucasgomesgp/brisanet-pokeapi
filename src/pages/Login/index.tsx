import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Container, Content, Image, Title, Form, Input, Button, BgPokemons } from "./styles";

export function Login() {
    return (
        <Container>
            <Content>
                <Image src="/assets/logoLight.png" alt="Logo do Pokémon" />
                <Title>
                    Comece a coletar pokémons!
                </Title>
                <Form>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Senha" />
                    <Button>
                        Entrar
                    </Button>
                </Form>
            </Content>
            <BgPokemons />
            <ThemeSwitcher />
        </Container>
    );
}