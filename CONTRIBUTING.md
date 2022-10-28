# CONTRIBUTORS

## Issues & PR's

Please fill out associated templates clearly and as detailed as possible for the
requested actions. It is important that you articulate WHAT you are trying to do
and WHY so your request will be considered. Before submission, search and review
all open and previously closed tickets before opening another one. This saves
everyone time!

## Guidelines

-   Development environment expectation is NodeJS v16 LTS & `npm >= 8.0.0`
-   Versioning & releases are handled by CI/CD & semantic versioning construct
    which relies upon semantic commits. We use git hooks with commitizen &
    commitlint to help faciliate contributors.

## Tools

1. **Git Hooks** (autoconfigured on install with Husky)

2. **Semantic commits**: Commitizen interactive commit msg creation, with
   `commitlint` verification

3. **Semantic Release**: Through `semantic-release`, the package is automatically
   versioned based on conventional-commit style messages.

## Testing

### Local Testing

Please validate changes with the equivalent peer dependency of `jest-runner@latest`,
on the current Node.js LTS version for validity.

### GitHub CI Pipeline

Upon an open Pull Request (PR), GitHub will automatically run the configured CI
actions in order to evaluate and enforce the project standards. You can review
the action steps at `.github/workflows/pr.yml`. The actions will line up with
the guidelines stated above. PR's will not be accepted until there are no merge
conflicts with the master branch nor failing pipeline actions. Please do your
due diligence.
