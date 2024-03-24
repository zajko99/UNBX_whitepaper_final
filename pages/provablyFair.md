# Provability Fair

UNBX uses a provably fair system to ensure the randomness and integrity of unboxing results. The platform employs a multi-part seed that is not fully known until after users have committed to their unboxing purchases. This prevents any party, including UNBX, from being able to predict or manipulate outcomes in advance.


## The unboxig process

1. User purchases and commits to opening a box before any seeds are revealed.
2. After commitment, UNBX combines:
   - A public seed publicly viewable on-chain
   - A server seed generated securely by UNBX
   - A unique, one-time use nonce value
3. This seed combination is hashed to derive the final random result for the user's unboxing.


Since the server seed is not known until after user commitment, neither UNBX nor any third-parties can unfairly sway the outcome. The public seed and use of a nonce also prevents any prediction patterns.

Users can independently verify that their unboxing adhered to this provably fair process. The on-chain data provides a cryptographic audit trail validating that UNBX did not override or manipulate the randomness in any way.

**If you have any further questions about our provably fair system, please do not hesitate to contact our support team for more help and information.**

