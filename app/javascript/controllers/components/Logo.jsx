import { SvgIcon } from '@mui/material';
import { styled } from '@mui/system';

const CustomIcon = styled(SvgIcon)(({ theme }) => ({
	width: '3rem',
	height: '3rem', // Adjust the desired size
  }));
  
  const MyIcon = (props) => (
	<CustomIcon {...props}>
	  <path d="M0 0h24v24H0z" fill="none" /> {/* Placeholder path */}
	  <path d="YOUR_SVG_PATH_HERE" fill="#000000" /> {/* Replace YOUR_SVG_PATH_HERE with the actual path for your PNG image */}
	</CustomIcon>
  );