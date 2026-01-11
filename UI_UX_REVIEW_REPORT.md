# 3D Western Website - UI/UX Review Report

**Date:** January 11, 2026
**Branch Reviewed:** main
**Reviewer:** Automated Browser Analysis

---

## Executive Summary

This report documents UI/UX findings and recommendations for the 3D Western website. The analysis covered the homepage, contact page, events page, makerspace/availability page, and mobile responsiveness.

---

## Pages Reviewed

### 1. Homepage

**Strengths:**
- Impressive 3D model hero section with smooth animations
- Clear value proposition with statistics (60+ Projects, 20+ Events, 50+ Active Visits)
- Well-organized content sections (About Us, Events, Makerspaces, Team, FAQs)
- Informative training banner with dismissible functionality
- Good use of visual hierarchy

**Issues Identified:**
- Hero section has no visible CTA button above the fold
- The 3D model, while impressive, may cause performance issues on lower-end devices

---

### 2. Contact Page

**Strengths:**
- Clean, accessible form layout
- Clear labels and placeholder text
- Inquiry type dropdown for categorization
- Response time expectation set ("1-2 business days")
- Link to FAQs as alternative resource

**Recommendations:**
- Consider adding form validation feedback before submission
- Add a phone number or alternative contact method for urgent inquiries

---

### 3. Events Page

**Strengths:**
- Clean grid layout for event cards
- Filtering tabs (All Events, Competitions, Workshops)
- Consistent card design with images, titles, and dates
- Clear CTA to contact for event organization

**Recommendations:**
- Add event descriptions visible on hover or click
- Consider adding a calendar view option
- Add registration/RSVP functionality

---

### 4. Makerspace/Availability Page

**Strengths:**
- Clear access requirements listed upfront
- Tab navigation between Digital and Sabourin makerspaces
- Typical hours displayed alongside calendar

**Issues Identified:**
- Google Calendar embed requires sign-in (401 error), making it inaccessible to unauthenticated users
- Calendar area appears blank/empty for visitors not logged into Google

**Recommendations:**
- Configure Google Calendar to be publicly viewable without sign-in
- Add a fallback display when calendar fails to load
- Consider embedding a public iCal feed instead

---

### 5. Mobile Responsiveness

**Strengths:**
- Hamburger menu works correctly
- Navigation menu is clean and readable when expanded
- 3D hero adapts well to smaller viewport
- Training banner displays appropriately on mobile
- Content reflows properly

**Recommendations:**
- Ensure all touch targets meet minimum 44x44px accessibility guidelines
- Test on actual mobile devices for performance verification

---

## Technical Issues (Console Warnings)

### Image Optimization Issues

The following images are missing the `sizes` prop when using `fill`:

| Image Path | Impact |
|------------|--------|
| `/logo.png` | Performance |
| `/images/lucky-block.webp` | Performance |
| `/images/workshop1.webp` | Performance |
| `/images/workshop2.webp` | Performance |
| `/images/workshop3.webp` | **LCP - High Priority** |
| `/images/workshop4.webp` | Performance |
| `/images/sewing.jpg` | Performance |

**Fix:** Add `sizes` prop to all Next.js Image components using `fill`:
```tsx
<Image
  src="/images/workshop3.webp"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Workshop"
/>
```

### Other Warnings

1. **Instagram SVG sizing:** Image has width or height modified but not both
   - **File:** `/images/Instagram.svg`
   - **Fix:** Ensure both width and height are set consistently

2. **Container positioning:** "Please ensure that the container has a non-static position"
   - **Impact:** Affects 3D model rendering container
   - **Fix:** Add `position: relative` to the parent container

---

## Performance Recommendations

### High Priority

1. **Add `sizes` prop to LCP image** (`workshop3.webp`)
   - This image was detected as the Largest Contentful Paint element
   - Missing `sizes` causes unnecessary bandwidth usage

2. **Fix Google Calendar authentication**
   - Current setup requires user sign-in
   - Make calendar publicly viewable or use a public embed URL

### Medium Priority

3. **Optimize 3D model loading**
   - Consider adding a loading skeleton/placeholder
   - Implement progressive loading for the GLTF model

4. **Add image `sizes` to all fill images**
   - Reduces bandwidth on mobile devices
   - Improves Core Web Vitals scores

### Low Priority

5. **Fix Instagram SVG dimensions**
   - Set both width and height explicitly

6. **Add relative positioning to containers**
   - Prevents layout warnings

---

## Accessibility Recommendations

1. **Focus indicators:** Ensure all interactive elements have visible focus states
2. **Color contrast:** Verify text contrast ratios meet WCAG AA standards
3. **Alt text:** Review all images for descriptive alt text
4. **Keyboard navigation:** Test full keyboard navigation flow
5. **Screen reader testing:** Verify semantic HTML structure

---

## Feature Recommendations

### Short-term
- Add a prominent CTA button in the hero section
- Implement form validation with user feedback
- Fix calendar embed accessibility

### Medium-term
- Add event registration functionality
- Implement equipment booking system preview
- Add project gallery/showcase section

### Long-term
- User dashboard for tracking projects
- Equipment availability real-time status
- Community forum or discussion board

---

## Files to Modify

| File | Changes Needed |
|------|----------------|
| `src/components/sections/EventsSection.tsx` | Add `sizes` to event card images |
| `src/components/sections/PhoneHeroSection.tsx` | Add container positioning fix |
| `src/components/Navigation.tsx` | Fix Instagram SVG dimensions |
| `src/components/sections/CalendarSection.tsx` | Fix Google Calendar public access |
| Various image components | Add `sizes` prop to fill images |

---

## Conclusion

The 3D Western website has a strong foundation with impressive visual design and good mobile responsiveness. The primary areas for improvement are:

1. **Image optimization** - Adding `sizes` props for better performance
2. **Calendar accessibility** - Making the Google Calendar publicly viewable
3. **User engagement** - Adding more CTAs and interactive features

Implementing these changes will improve performance, accessibility, and user experience.

---

*Report generated via automated browser analysis*
