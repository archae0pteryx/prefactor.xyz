import { Container, Typography } from "@mui/material";
import { NavLayout } from "../../components/Navigation/NavLayout";

export default function DeveloperProfilePage() {
  return (
    <NavLayout>
      <Container>
        <Typography>Developer Profile</Typography>
      </Container>
    </NavLayout>
  )
}

DeveloperProfilePage.auth = true
