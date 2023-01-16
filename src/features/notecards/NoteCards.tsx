import { Container } from "@mui/material";
import React from "react";
import NoteCard from "./NoteCard";

type Props = {};

const NoteCards = (props: Props) => {
	return (
		<Container>
			<NoteCard />
		</Container>
	);
};

export default NoteCards;
