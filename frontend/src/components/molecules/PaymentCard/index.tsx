import { Card, Typography, styled, Box, CardContent } from "@mui/material"
import React from "react"
import Image from '../../atoms/Image'
import CreditCardIcon from '../../../../public/assets/images/caredit-card-image.svg'
import {Colors} from '../../../theme/theme'

interface IPaymentCardProps {
    cardLogoUrl?: string;
    cardName: string;
    cardNumber: string;
    cardHolderName: string;
    cardExpiry: string;
  }

const PaymentCard = (props:IPaymentCardProps) => {
    const StyledCard = styled(Card)({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '27.0625rem',
        padding: '0.625rem 1.875rem',
        borderRadius: '1rem',
        boxShadow: '0rem 0rem 0.75rem rgba(233, 232, 237, 0.7)',
    });
    const StyledCardContent = styled(CardContent)({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      });
    
      const StyledLogoCardContent = styled(CardContent)({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'space-between',
        padding: '1.25rem 0rem 1.25rem 0rem',
      });
    
      const StylesCardHolderBox = styled(Box)({
        display: 'flex',
        flexDirection: 'column'
      });
    return(
        <StyledCard>
            <StyledLogoCardContent>
            <Image
                src={CreditCardIcon}
                alt="credit card"
                height={30}
                width={48}
            />
            <Typography
                variant="caption"
                color={Colors.label_black}
                children={props.cardName}
            />
            </StyledLogoCardContent>
            <StyledCardContent>
            <Typography
                variant="button"
                color={Colors.high_emphasis}
                children={props.cardNumber}
            />
            </StyledCardContent>
            <StyledCardContent>
            <StylesCardHolderBox>
                <Typography
                variant="caption"
                children="Card Holder"
                color={Colors.low_emphasis}
                />
                <Typography
                variant="caption"
                color={Colors.high_emphasis}
                children={props.cardHolderName}
                />
            </StylesCardHolderBox>
            <StylesCardHolderBox sx={{marginLeft: 4}}>
                <Typography
                variant="caption"
                children="Expires"
                color={Colors.low_emphasis}
                />
                <Typography
                variant="caption"
                color={Colors.high_emphasis}
                children={props.cardExpiry}
                />
            </StylesCardHolderBox>
            </StyledCardContent>
      </StyledCard>
    )

}

export default PaymentCard;
