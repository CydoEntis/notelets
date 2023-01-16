import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

const NoteCard = (props: Props) => {
	return (
		<Paper
			elevation={16}
			sx={{
				padding: 3,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flex: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography sx={{ textAlign: "center" }}>Term</Typography>
				<Typography sx={{ textAlign: "center" }}>1/114</Typography>
				<Box sx={{ display: "flex", flex: "row" }}>
					<Typography sx={{ textAlign: "center", mr: 2 }}>
						<EditIcon />
					</Typography>
					<Typography sx={{ textAlign: "center" }}>
						<StarIcon />
					</Typography>
				</Box>
			</Box>
			<Box sx={{ p: 10 }}>
				<Typography sx={{ textAlign: "center", fontSize: "32px" }}>
					Geological
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flex: "row",
					justifyContent: "center",
					border: "2px",
				}}
			>
				<Button
					variant="contained"
					sx={{ width: 1 / 3, mr: 2, p: 2 }}
				>
					<ChevronLeft />
				</Button>
				<Button
					variant="contained"
					sx={{ width: 1 / 3 }}
				>
					<ChevronRight />
				</Button>
			</Box>
		</Paper>
	);
};

export default NoteCard;
