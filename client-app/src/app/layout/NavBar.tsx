import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
interface Props {
  openForm: () => void; // parametre almıyor alsa edit form olacaktı.
}
export default function Navbar({ openForm }: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Faaliyetler
        </Menu.Item>
        <Menu.Item name="Aktiviteler"></Menu.Item>
        <Menu.Item>
          <Button onClick={openForm} positive content="Aktivite Oluştur" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
