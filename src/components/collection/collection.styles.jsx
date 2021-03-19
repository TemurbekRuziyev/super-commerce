import styled from 'styled-components';

import {ReactComponent as Like} from '../../assets/heart.svg';

export const CollectionContainer = styled.div`
    position: relative;
`;

export const CollectionLike = styled(Like)`
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 0;
    right: 0;
`;


