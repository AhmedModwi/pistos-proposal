# 4. Execution Plan

## Approach
Rather than building everything at once, the project is divided into two layers. Each layer has a clear purpose and can be delivered independently.

## Layer 1: Public Website (Astro)
A fast, well-structured public website that reinforces credibility after an initial conversation or referral.

**Characteristics:**
- Built for performance (SEO, Core Web Vitals)
- No user accounts or dashboards
- Focused on clear messaging and professional presentation

## Layer 2: Decision Support Tools (Next.js)
A private web application that helps prospective clients evaluate their options. Access is gated by phone number authentication.

### Client-Facing Tools
1. **Cost Estimation:** Provides realistic ranges and trade-offs — not inflated precision.
2. **Jurisdiction Helper:** Compares Mainland vs. Free Zone based on client inputs.
3. **Trade Name Checker:** Checks name availability early in the process.
4. **Activity Selector:** Narrows down suitable business activities.
5. **Government API Integration:** Connects to DED or Free Zone systems where available.

### Internal Use
- Staff can view which tools a client used and what outputs were generated.
- Designed for informed follow-up — not as a full CRM replacement.

### Optional: AI Assistant
A retrieval-based assistant that answers common questions using approved content only. Contained within Layer 2. Requires separate API budget approval before implementation.

---

## Future Additions
Once Layers 1 and 2 are stable, the architecture supports additional modules without major rework:
- **Government API Integration:** Direct linking to DED/Free Zone portals for name reservation and license status.
- **Digital Vault & E-Signatures:** Secure document uploads with OCR and digital contract signing.
- **Automated PRO Workflows:** Ticketing for visa processing, Emirates ID tracking, and medical scheduling.
- **Corporate Tax Dashboard:** Connected dashboards for The One Accountant's bookkeeping and tax services.

## Delivery Sequence
1. Launch Layer 1 (Public Astro site)
2. Launch Layer 2 (Next.js tools)
3. Evaluate and optionally add AI assistant
