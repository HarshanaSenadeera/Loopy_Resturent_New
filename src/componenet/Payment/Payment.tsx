import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, FormLabel, Box, Card, CardContent, CardActions, Divider, Avatar, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const PaymentMethodBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
});

const StyledFormControlLabel = styled(FormControlLabel)({
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginRight: 0,
    marginLeft: 0,
    '& .MuiRadio-root': {
        padding: 0,
    },
});

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
        setCardNumber(formattedValue);
    };

    const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const formattedValue = value.replace(/^(\d{2})(\d{2})$/, '$1/$2');
        setExpiryDate(formattedValue);
    };

    const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const formattedValue = value.replace(/\D/g, '');
        setCvc(formattedValue);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Payment Method
            </Typography>
            <form>
                <Card
                    variant="outlined"
                    sx={{
                        maxHeight: 'max-content',
                        maxWidth: '100%',
                        mx: 'auto',
                        overflow: 'auto',
                        resize: 'horizontal',
                    }}
                >
                    <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                        <InfoOutlined sx={{ marginRight: 1 }} />
                        Add new card
                    </Typography>
                    <CardContent
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                            gap: 1.5,
                        }}
                    >
                        <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Payment Method</FormLabel>
                            <RadioGroup row aria-label="payment-method" name="payment-method" defaultValue="credit-card">
                                <StyledFormControlLabel
                                    value="credit-card"
                                    control={<Radio />}
                                    label={
                                        <Box display="flex" alignItems="center">
                                            <Avatar src="visa.png" alt="Credit Card" sx={{ width: 50, height: 50, marginRight: 1 }} />
                                            Credit Card
                                        </Box>
                                    }
                                />
                                <StyledFormControlLabel
                                    value="paypal"
                                    control={<Radio />}
                                    label={
                                        <Box display="flex" alignItems="center">
                                            <Avatar src="paypal (4).png" alt="PayPal" sx={{ width: 50, height: 50, marginRight: 1 }} />
                                            PayPal
                                        </Box>
                                    }
                                />
                                <StyledFormControlLabel
                                    value="debit-card"
                                    control={<Radio />}
                                    label={
                                        <Box display="flex" alignItems="center">
                                            <Avatar src="debit.png" alt="Debit Card" sx={{ width: 50, height: 50, marginRight: 1 }} />
                                            Debit Card
                                        </Box>
                                    }
                                />
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Card number</FormLabel>
                            <TextField
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="1234 5678 1234 5678"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <CreditCardIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{
                                    pattern: "[0-9 ]{19}",
                                    maxLength: 19,
                                    required: true,
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Expiry date</FormLabel>
                            <TextField
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                placeholder="MM/YY"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <CreditCardIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{
                                    pattern: "(0[1-9]|1[0-2])/([0-9]{2})",
                                    maxLength: 5,
                                    required: true,
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>CVC/CVV</FormLabel>
                            <TextField
                                value={cvc}
                                onChange={handleCvcChange}
                                placeholder="123"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <InfoOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{
                                    pattern: "\\d{3,4}",
                                    maxLength: 4,
                                    required: true,
                                }}
                            />
                        </FormControl>
                        <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Card holder name</FormLabel>
                            <TextField
                                value={cardHolderName}
                                onChange={(e) => setCardHolderName(e.target.value)}
                                placeholder="Enter cardholder's full name"
                                variant="outlined"
                                fullWidth
                                inputProps={{
                                    maxLength: 50,
                                    required: true,
                                }}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="saveDetails" color="primary" />}
                            label="Save my details for future purchases"
                            sx={{ gridColumn: '1/-1', my: 1 }}
                        />
                        <CardActions sx={{ gridColumn: '1/-1' }}>
                            <Button variant="contained" color="primary">
                                Add card
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </form>
        </Container>
    );
};

export default Payment;
