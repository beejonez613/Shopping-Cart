import styled from 'styled-components';
import IconButton  from '@material-ui/core/Icon';

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)`
    position: relative;
    z-index: 100;
    right: 30px;
    top: 20px;
`