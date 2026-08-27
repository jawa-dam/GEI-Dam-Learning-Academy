# PayPal Integration Boundary

The existing GEI PayPal backend is a separate protected system.

For this Academy release:
1. Do not alter the PayPal backend credentials.
2. Do not put a PayPal client secret or webhook secret in frontend HTML/JS.
3. Do not rename the existing PayPal backend routes until they are explicitly mapped.
4. Academy progression must work independently of checkout.
5. Checkout can be plugged into the Academy later through a public checkout URL or safe backend endpoint.

The release checklist treats PayPal as a protected boundary, not something to rewrite while fixing Academy navigation.
