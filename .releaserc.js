module.exports = {
    branches: [ "master", "next" ],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "angular",
                releaseRules: [
                    { type: "build", scope: "deps", release: "patch" },
                    { type: "build", scope: "deps-peer", release: "patch" },
                    { type: "build", scope: "deps-dev", release: false },
                    { type: "docs", scope: "README", release: "patch" },
                    { type: "docs", scope: "LICENSE", release: "patch" }
                    // Continue matching via commit-analyzer/lib/default-release-rules.js
                    // which are the following for the angular preset:
                    // { breaking: true, release: 'major' },
                    // { revert: true, release: 'patch' },
                    // { type: 'feat', release: 'minor' },
                    // { type: 'fix', release: 'patch' },
                    // { type: 'perf', release: 'patch' },
                ]
            }
        ],
        "@semantic-release/release-notes-generator",
        // "@semantic-release/changelog",
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
