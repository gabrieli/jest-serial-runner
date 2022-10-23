module.exports = {
    branches: ["master", "next"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/github",
        [
            "semantic-release-npm-deprecate-old-versions",
            {
                rules: [
                    {
                        rule: "supportLatest",
                        // Support 2 versions:
                        //   1x for master (ie. @latest)
                        //   1x for next (ie. @next)
                        options: {
                            numberOfMajorReleases: 2,
                            numberOfMinorReleases: 2,
                            numberOfPatchReleases: 2
                        }
                    },
                    "deprecateAll"
                ]
            }
        ]
    ]
};
