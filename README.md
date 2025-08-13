# Automation Test Store - Playwright Test Suite

This repository contains automated tests for the Automation Test Store website using Playwright with TypeScript and Page Object Model (POM) design pattern.

## 🎯 Test Scenarios

**Scenario 1: Complete E-commerce Flow**
1. **Login** to the website
2. Navigate to **Home** page
3. **Scroll** and select **Dove** brand from the brands scrolling list
4. Select the **newest** Dove item and **add it to cart**
5. **Verify** the item in cart with amount and quantity

**Scenario 2: Apparel & T-shirts Flow**
1. **Login** to the website
2. Navigate to **Home** page
3. Go to **APPAREL & ACCESSORIES** section
4. Navigate to **T-shirts** subsection
5. **Verify** T-shirts page loads correctly

**Scenario 3: Skincare Section Testing with XPath Selectors**
1. **Login** to the website
2. Navigate to **Skincare** section
3. **Count** items on sale and out of stock
4. **Add** sale items to cart
5. **Verify** cart counts (total items and sale items)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Install Playwright browsers
npm run install-browsers
```

### Running Tests

#### Using the Script (Recommended)
```bash
# Make the script executable
chmod +x run-tests.sh

# Run tests in different modes
./run-tests.sh          # Default: headless mode
./run-tests.sh headed   # With browser visible
./run-tests.sh debug    # Debug mode
./run-tests.sh ui       # Playwright UI mode
./run-tests.sh chromium # Run in Chromium only
./run-tests.sh firefox  # Run in Firefox only
./run-tests.sh webkit   # Run in WebKit only
```

#### Using npm Scripts
```bash
# Run all tests
npm test

# Run with browser visible
npm run test:headed

# Run in debug mode
npm run test:debug

# Open Playwright UI
npm run test:ui

# View test report
npm run report
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory (optional):
```env
USERNAME=your_username
PASSWORD=your_password
BASE_URL=https://automationteststore.com/
```

If no `.env` file is found, the script will use default credentials:
- Username: `sharjeel`
- Password: `ahmad12`
- Base URL: `https://automationteststore.com/`

### Playwright Configuration
The `playwright.config.ts` file is configured for:
- Multiple browser support (Chromium, Firefox, WebKit)
- Screenshots and videos on failure
- Trace collection for debugging
- Optimized timeouts and stability settings

## 📁 Project Structure

```
├── pages/                 # Page Object Models
│   ├── LoginPage.ts      # Login page interactions
│   ├── HomePage.ts       # Home page interactions
│   ├── ProductPage.ts    # Product page interactions
│   └── CartPage.ts       # Cart page interactions
├── tests/                # Test specifications
│   ├── scenario1.spec.ts # Complete E-commerce Flow
│   ├── scenario2.spec.ts # Apparel & T-shirts Flow
│   └── scenario3.spec.ts # Skincare Section Testing
├── test-results/         # Test execution results
├── playwright-report/    # HTML test reports
├── playwright.config.ts  # Playwright configuration
└── run-tests.sh         # Test runner script
```

## 🧪 Test Features

### Robust XPath Selectors
- Multiple fallback selectors for each element
- Dynamic element detection
- Comprehensive error handling

### Error Handling
- Detailed logging for each step
- Screenshots on failure
- Graceful fallbacks for missing elements
- Comprehensive error messages

### Stability Features
- Increased timeouts for slow operations
- Wait for network idle states
- Scroll into view before interactions
- Multiple verification methods

## 🔍 Debugging

### View Test Results
```bash
npm run report
```

### Debug Mode
```bash
./run-tests.sh debug
```

### Playwright UI
```bash
./run-tests.sh ui
```

### Trace Files
Trace files are automatically generated on test failure and stored in `test-results/` directory.

## 📊 Test Reports

After test execution, reports are available in:
- **HTML Report**: `playwright-report/index.html`
- **JSON Results**: `test-results/results.json`
- **JUnit XML**: `test-results/results.xml`

## 🐛 Troubleshooting

### Common Issues

1. **Element Not Found**: The test uses multiple fallback selectors. Check if the website structure has changed.

2. **Timeout Errors**: Increase timeouts in `playwright.config.ts` if the website is slow.

3. **Browser Issues**: Try running with a different browser using `./run-tests.sh chromium`.

4. **Login Failures**: Verify credentials in `.env` file or update default values.

### Getting Help

- Check the console output for detailed error messages
- Review screenshots and videos in `test-results/` directory
- Use debug mode for step-by-step execution
- Check Playwright trace files for detailed interaction logs

## 🎉 Success Criteria

**Scenario 1** is considered successful when:
- ✅ User successfully logs in
- ✅ Home page loads correctly
- ✅ Dove brand is selected from the carousel
- ✅ Newest Dove item is added to cart
- ✅ Cart verification passes (item name, quantity, and amount)

**Scenario 2** is considered successful when:
- ✅ User successfully logs in
- ✅ Home page loads correctly
- ✅ APPAREL & ACCESSORIES section loads
- ✅ T-shirts subsection loads correctly

**Scenario 3** is considered successful when:
- ✅ User successfully logs in
- ✅ Home page loads correctly
- ✅ Skincare section loads with products
- ✅ Sale items and out of stock items are counted accurately
- ✅ Sale items are added to cart successfully
- ✅ Cart verification passes with correct item counts

## 🔄 Continuous Integration

The test suite is configured for CI/CD with:
- Retry logic for flaky tests
- Parallel execution support
- Multiple browser testing
- Comprehensive reporting

---

**Note**: This test suite is designed to be robust and handle various edge cases. It uses XPath selectors as requested and includes comprehensive error handling for production use.
