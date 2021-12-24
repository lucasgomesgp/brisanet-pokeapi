import { useState } from "react";
import { FormEvent, useContext } from "react";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import {
    Container,
    Content,
    Image,
    Title,
    Form,
    Input,
    Button,
    BgPokemons,
} from "./styles";

export function Login() {
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleLogin(event: FormEvent) {
        event.preventDefault();
        signIn({
            email,
            password
        });
    }

    return (
        <Container>
            <Content>
                <Image src="/assets/logoLight.png" alt="Logo do Pokémon" />
                <Title>Comece a coletar pokémons!</Title>
                <Form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button>Entrar</Button>
                </Form>
            </Content>
            <BgPokemons />
            <ThemeSwitcher />
        </Container>
    );
}
